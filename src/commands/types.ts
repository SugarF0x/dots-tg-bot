export enum Command {
  HELP = 'help'
}

export function isCommand(val: string): val is Command {
  return Object.values(Command).includes(val as Command)
}
