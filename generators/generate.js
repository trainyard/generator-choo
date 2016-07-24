module.exports = ({category, templateFileName}) => function () {
  const agent = this
  if (!agent.args[0]) {
    console.log('Missing paramater')
    process.exit(0)
  }
  agent.projectPath = agent.config.get('projectPath')
  agent.targetName = agent.args[0]
  agent.fileName = `${agent.targetName}.js`
  agent.targetPath = `${agent.projectPath}/src/${category}/${agent.fileName}`
  agent.fs.copyTpl(
    agent.templatePath(templateFileName),
    agent.destinationPath(agent.targetPath),
    { name: agent.targetName }
  )
}
