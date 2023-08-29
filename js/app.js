const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const symbolSet = "~!@#$%^&*()_+/"

const passBox = document.getElementById("passbox")
const totalChar = document.getElementById("totalchar")
const upperInput = document.getElementById("uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("number")
const symbolInput = document.getElementById("symbol")

totalChar.addEventListener("input", function () {
    if (totalChar.value > 20) {
        totalChar.value = 20;
    }
});

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePwd = (password = "") =>{
    if(upperInput.checked){
        password+=getRandomData(upperSet)
    }
    if(lowerInput.checked){
        password+=getRandomData(lowerSet)
    }
    if(numberInput.checked){
        password+=getRandomData(numberSet)
    }
    if(symbolInput.checked){
        password+=getRandomData(symbolSet)
    }
    if(password.length<totalChar.value){
        return generatePwd(password)
    }
    passBox.innerText=(truncatestr(password,totalChar.value))
    navigator.clipboard.writeText(passBox.innerText)

}

document.getElementById("btn").addEventListener(
    "click",
    function(){
        generatePwd()
    }
)


function truncatestr(str,num){
    if(str.length>num){
        let substr = str.substring(0,num)
        return substr
    }
    else{
        return str
    }
}

generatePwd();