import { PluginObj } from '@babel/core';
import * as t from '@babel/types';

interface PluginOptions {
  importSource?: string;
  functionName?: string;
}

/**
 * Babel plugin that transforms JSX expressions to use toDisplayString
 */
export default function jsxToDisplayString(opts: PluginOptions): PluginObj {
  
  return {
    name: 'jsx-to-display-string',
    visitor: {
      Program: {
        enter(path, state) {
          // const opts = state.opts as PluginOptions;
          const importSource = opts.importSource || 'babel-plugin-jsx-to-display-string/runtime';
          const functionName = opts.functionName || 'toDisplayString';

          // Check if the import already exists
          let importExists = path.node.body.some(node => 
            t.isImportDeclaration(node) && 
            node.source.value === importSource && 
            node.specifiers.some(spec => 
              t.isImportSpecifier(spec) && 
              t.isIdentifier(spec.imported) && 
              spec.imported.name === functionName
            )
          );

          if (!importExists) {
            // Add import statement for toDisplayString
            const importDeclaration = t.importDeclaration(
              [t.importSpecifier(t.identifier(functionName), t.identifier(functionName))],
              t.stringLiteral(importSource)
            );
            path.unshiftContainer('body', importDeclaration);
          }
        }
      },
      JSXExpressionContainer(path, state) {
        const opts = state.opts as PluginOptions;
        const functionName = opts.functionName || 'toDisplayString';

        // Skip JSX attributes or spread expressions
        if (path.parent && (
          t.isJSXAttribute(path.parent) || 
          t.isJSXSpreadAttribute(path.parent)
        )) {
          return;
        }

        // Skip expressions that are already wrapped with toDisplayString
        if (
          t.isCallExpression(path.node.expression) && 
          t.isIdentifier(path.node.expression.callee) && 
          path.node.expression.callee.name === functionName
        ) {
          return;
        }

        // Check if the expression is a valid Expression
        if (t.isExpression(path.node.expression)) {
          // Wrap the expression with toDisplayString
          path.node.expression = t.callExpression(
            t.identifier(functionName),
            [path.node.expression]
          );
        }
      }
    }
  };
} 