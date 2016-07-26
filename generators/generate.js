const { resolve: resolvePath } = require('path')
const kebab = require('lodash.kebabcase')

module.exports = ({category, templateFileName}) => function () {
  const agent = this
  if (!agent.args[0]) {
    console.log('Missing paramater')
    process.exit(0)
  }
  agent.projectPath = agent.destinationRoot() || agent.config.get('projectPath') || ''
  agent.targetName = agent.args[0]
  agent.fileName = `${kebab(agent.targetName)}.js`
  agent.targetPath = resolvePath(agent.projectPath, 'src', category, agent.fileName)
  agent.fs.copyTpl(
    agent.templatePath(templateFileName),
    agent.destinationPath(agent.targetPath),
    { name: agent.targetName }
  )
}
