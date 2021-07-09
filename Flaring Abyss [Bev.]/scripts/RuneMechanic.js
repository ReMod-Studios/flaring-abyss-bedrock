import * as Gametest from "Gametest"
import { Commands } from "Minecraft"

export function runeOfRecalling(thisTest) {
    try {
        let keepInventoryTest = Commands.run("/gamerule keepInventory")
        let keepInventory = JSON.parse(keepInventoryTest.details).keepinventory
        let doImmediateRespawnTest = Commands.run("/gamerule doImmediateRespawn")
        let doImmediateRespawn = JSON.parse(doImmediateRespawn.details).doimmediaterespawn
    } catch (err) {}

    if (keepInventory == false) {
        Commands.run("/gamerule keepInventory true")
        if (doImmediateRespawn == true) {
            Commands.run("/gamerule doImmediateRespawn false")
            Commands.run("/execute @p ^^^ kill @s")
            Commands.run("/gamerule doImmediateRespawn true")
        }
        else {
            Commands.run("/gamerule doImmediateRespawn true")
            Commands.run("/execute @p ^^^ kill @s")
            Commands.run("/gamerule doImmediateRespawn false")
        }
        Commands.run("/gamerule keepInventory false")
    }
    else {
        Commands.run("/gamerule keepInventory false")
        if (doImmediateRespawn == true) {
            Commands.run("/gamerule doImmediateRespawn false")
            Commands.run("/execute @p ^^^ kill @s")
            Commands.run("/gamerule doImmediateRespawn true")
        }
        else {
            Commands.run("/gamerule doImmediateRespawn true")
            Commands.run("/execute @p ^^^ kill @s")
            Commands.run("/gamerule doImmediateRespawn false")
        }
        Commands.run("/gamerule keepInventory true")
    }
    thisTest.succeed()
}