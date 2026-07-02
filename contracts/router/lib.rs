use anchor_lang::prelude::*;

declare_id!("RUSH111111111111111111111111111111111111");

#[program]
pub mod router {
    use super::*;

    pub fn execute_order(
        _ctx: Context<ExecuteOrder>,
        market: String,
    ) -> Result<()> {
        msg!("Executing order on {}", market);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct ExecuteOrder<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
