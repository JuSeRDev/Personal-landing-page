namespace ci01{
  const buttons = document.querySelectorAll(".btn") as NodeListOf<HTMLButtonElement>
  const result = document.querySelector(".result-value") as HTMLParagraphElement
  
  const body = document.querySelector("body") as HTMLElement
  const rangeContainer = document.querySelector(".theme-range") as HTMLDivElement
  const containerCalc = document.querySelector(".container-calc") as HTMLDivElement
  const resultContainer = document.querySelector(".result-container") as HTMLDivElement
  const buttonsActions = document.querySelectorAll(".del, .reset, .igual") as NodeListOf<HTMLButtonElement>
  const textHeader = document.querySelectorAll(".calc, .txt-theme") as NodeListOf<HTMLParagraphElement>
  const numbersHeader = document.querySelector(".theme-color") as HTMLDivElement
  

  const range = document.querySelector(".theme-range-input") as HTMLInputElement

  let total: number = 0
  let record: number[] = []
  let currentOperator: string = "+"
  let justCalculed = false

  const del = () =>{
    result.textContent = result.textContent?.slice(0, -1) || ""
    result.textContent == "" ? result.textContent = "0" : result.textContent
  }

  const operate = ()=>{
    record.push(Number(result.textContent))

    if (record.length > 1) {
      switch (currentOperator) {
        case "+":
          total = record[0] + record[1]
          break;
        case "-":
          total = record[0] -record[1]
          break;
        case "*":
          total = record[0] * record[1]
          break;
        case "/":
          total = record[0] / record[1]
          break;
        default:
          break;
      }
      record = [total]
    }
    result.textContent = "0"
  }

  const calculate = () => {
    record.push(Number(result.textContent))
  
    if (record.length > 1) {
      switch (currentOperator) {
        case "+":
          total = record[0] + record[1]
          break
        case "-":
          total = record[0] - record[1]
          break
        case "*":
          total = record[0] * record[1]
          break
        case "/":
          total = record[0] / record[1]
          break
      }
  
      result.textContent = total.toString()
      record = []
      justCalculed = true
    }
  }

  buttons.forEach(button => {
    button.addEventListener("click", ()=>{
      const value: string = button.dataset.value ?? ""

      switch (value) {
        case "del":
          del()
          break
        case "+":
          currentOperator = "+"
          operate()
          break
        case "-":
          currentOperator = "-"
          operate()
          break
        case "*":  
          currentOperator = "*"
          operate()
          break
        case "/":
          currentOperator = "/"
          operate()
          break
        case "reset":
          result.textContent = "0"
          record = []
          total = 0
          currentOperator = "+"
          break
        case "=":
          calculate()
          break
        default:
          if (result.textContent === "0"|| justCalculed) {
            result.textContent = value
            justCalculed = false
          }else{
            result.textContent += value
          }
          // result.textContent === "0" ? result.textContent = value : result.textContent += value
          break;
      }

    })
  });

  rangeContainer.addEventListener("click", ()=>{
  
    const backgroundColors_1 = ["--Very-dark-desaturated-blue-main-background", "--Very-dark-desaturated-blue-toggle-background-keypad-background", "--Very-dark-desaturated-blue-screen-background"]
    const keys_1 = ["--Desaturated-dark-blue-key-background", "-Desaturated-dark-blue-key-shadow"]
    const keysToggle_1 = ["--Red-key-background-toggle", "--Dark-red-key-shadow"]
    const keyTotal_1 = ["--Light-grayish-orange-key-background", "--Grayish-orange-key-shadow"]
    const text_1 = ["--Very-dark-grayish-blue", " --White"]

    const backgroundColors_2 = ["--Light-gray-main-background", "--Grayish-red-toggle-background-keypad-background", "--Very-light-gray-screen-background"]
    const keys_2 = ["--Dark-moderate-cyan-key-background", "--Very-dark-cyan-key-shadow"]
    const keysToggle_2 = ["--Orange-key-background-toggle", "--Dark-orange-key-shadow"]
    const keyTotal_2 = ["--Light-grayish-yellow-key-background", "--Dark-grayish-orange-key-shadow"]
    const text_2 = ["--Very-dark-grayish-yellow", "--White-text"]

    const backgroundColors_3 = ["--Very-dark-violet-main-background", "--Very-dark-violet-toggle-background-keypad-background-screen-background"]
    const keys_3 = ["--Dark-violet-key-background", "--Vivid-magenta-key-shadow"]
    const keysToggle_3 = ["--Pure-cyan-key-background-toggle", "--Soft-cyan-key-shadow"]
    const keyTotal_3 = ["--Very-dark-violet-key-background", "--Dark-magenta-key-shadow"]
    const text_3 = ["--Light-yellow", "--Very-dark-blue", "--White-text"]

    // type Theme = {
    //   backgroundColors_1 : string[]
    //   keys_1 : string[]
    //   keysToggle_1 : string[]
    //   keyTotal_1 : string[]
    //   text_1 : string[]
    // }

    const themes ={
      theme_1: {
        backgroundColors: backgroundColors_1,
        keys: keys_1,
        keyToggle: keysToggle_1,
        keyTotal: keyTotal_1,
        text: text_1
      },
      theme_2: {
        backgroundColors: backgroundColors_2,
        keys: keys_2,
        keyToggle: keysToggle_2,
        keyTotal: keyTotal_2,
        text: text_2
      },
      theme_3: {
        backgroundColors: backgroundColors_3,
        keys: keys_3,
        keyToggle: keysToggle_3,
        keyTotal: keyTotal_3,
        text: text_3
      }
    }

    const theme_1 = themes.theme_1
    const theme_2 = themes.theme_2
    const theme_3 = themes.theme_3

    const changeTheme = (theme: any)=>{
      body.style.background = `var(${theme.backgroundColors[0]})`
      rangeContainer.style.background = `var(${theme.backgroundColors[1]})`
      containerCalc.style.background = `var(${theme.backgroundColors[1]})`
      
      
      resultContainer.style.background = `var(${theme.backgroundColors[2]})`

      result.style.color = `var(${theme.text[0]})`

      for (const button of buttons) {
        button.style.color = `var(${theme.text[0]})`
        button.style.background = `var(${theme.keyTotal[0]})`
      }

      for (const button of buttonsActions) {
        button.style.color = `var(${theme.text[1]})`
      }

      if (value == "3") {
        resultContainer.style.background = `var(${theme.backgroundColors[1]})`
        for (const button of buttonsActions) {
          button.style.color = `var(${theme.text[2]})`
        }

      }

      for (const element of textHeader) {
        element.style.color = `var(${theme.text[0]})`
      }

      numbersHeader.style.color = `var(${theme.text[0]})`

      if (value === "1") {
        for (const element of textHeader) {
          element.style.color = `var(${theme.text[1]})`
          numbersHeader.style.color = `var(${theme.text[1]})`
          result.style.color = `var(${theme.text[1]})`
        }
      }

      
      buttonsActions[0].style.background = `var(${theme.keys[0]})`
      buttonsActions[0].style.borderColor = `var(${theme.keys[1]})`
      buttonsActions[1].style.background = `var(${theme.keys[0]})`
      buttonsActions[1].style.borderColor = `var(${theme.keys[1]})`
      buttonsActions[2].style.background = `var(${theme.keyToggle[0]})`
      buttonsActions[2].style.borderColor = `var(${theme.keyToggle[1]})`
    }

    
    const value = range.value
    
    switch (value) {
      case "1":
        changeTheme(theme_1)
        break;
      case "2":
        changeTheme(theme_2)
        break;
      case "3":
        changeTheme(theme_3)
        break;
    
      default:
        break;
    }


  })


}