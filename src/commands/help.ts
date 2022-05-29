import { Command, isCommand } from './types'

const commandToHelpTextMap: Record<Command, string[]> = {
  [Command.HELP]: [
    'General purpose `Help` command',
    '',
    '*USAGE*: `/help <command>` to get more on a specific command',
    'Type `/help list` to show all the available command'
  ]
}

export function help(command: string = Command.HELP) {
  if (!isCommand(command)) return `No help available for \`${command}\` command`
  return commandToHelpTextMap[command]?.join('\n')
}
