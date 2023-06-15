function generatorComponent(plop) {
  plop.setGenerator('component', {
    description: 'Cria a estrutura de componentes com style, stories e teste.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Nome do componente:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.tsx',
        templateFile: 'templates/components/index.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/styles.ts',
        templateFile: 'templates/components/styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/stories.ts',
        templateFile: 'templates/components/stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/test.tsx',
        templateFile: 'templates/components/test.tsx.hbs'
      }
    ]
  })
}
module.exports = generatorComponent
