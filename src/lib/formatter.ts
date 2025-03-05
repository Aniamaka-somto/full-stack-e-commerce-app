const CURRENT_FORMATTER = new Intl.NumberFormat("en-Us", {
    currency: "USD",
    style:"currency",
    minimumFractionDigits:0
})

export function formatCurrency(amount: number){
    return CURRENT_FORMATTER.format(amount)
}

const NUMBER_FORMATTER =new Intl.NumberFormat("en-Us")

export function formatNumber(number: number){
    return NUMBER_FORMATTER.format(number)
}
