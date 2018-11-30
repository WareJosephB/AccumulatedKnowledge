const ApiURL = 'http://35.242.136.183:8080/'
export const makeAccountURL = ApiURL + 'accounts/addAccount'
export const checkWinnerURL = ApiURL + 'accounts/processOffer/'

export const EnterMessage = "Please enter your details to make an account"
export const makeAccountSuccessString = "Account Succesfully Created"
export const yourAccountNumber = "Your account number is:"
const enterPrizeString = "Would you like to enter our prize draw with a change to win up to "
const prizeAmount = "£50"
export const prizeString = enterPrizeString + prizeAmount;
export const currency = " pounds."

export const Header = "Create a new account:"
export const Submit = "Submit"
export const FirstName = "Forename:"
export const LastName = "Surname:"
export const EnterDraw = "Enter Draw"
export const Loser = "Sorry no prize for you today"
export const Winnner = "Congratulations! You have won "