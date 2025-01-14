use anchor_lang::prelude::*;

declare_id!("EHx6TTsGEME8iRoKuvW5TL66RrhcfWGaYtiXPveBTdxD");

#[program]
pub mod escrow {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        msg!("Greetings from: {:?}", ctx.program_id);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize {}
