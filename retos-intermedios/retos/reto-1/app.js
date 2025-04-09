"use strict";
var interChallenge01;
(function (interChallenge01) {
    class Persons {
        id;
        content;
        createdAt;
        score;
        img;
        username;
        replyingTo;
        constructor(id, content, createdAt, score, img, username, replyingTo) {
            this.id = id;
            this.content = content;
            this.createdAt = createdAt;
            this.score = score;
            this.img = img;
            this.username = username;
            this.replyingTo = replyingTo;
        }
    }
    const main = document.querySelector("main");
    fetch("data.json")
        .then((response) => response.json())
        .then((data) => {
        let amy = data.comments[0];
        let max = data.comments[1];
        let ramses = data.comments[1].replies?.[0];
        let julius = data.comments[1].replies?.[1];
        const amyrobson = new Persons(amy.id, amy.content, amy.createdAt, amy.score, amy.user.image.png, amy.user.username);
        const maxblagun = new Persons(max.id, max.content, max.createdAt, max.score, max.user.image.png, max.user.username);
        const ramsesmiron = new Persons(ramses?.id ?? 0, ramses?.content ?? "", ramses?.createdAt ?? "", ramses?.score ?? 0, ramses?.user.image.png ?? "", ramses?.user.username ?? "", ramses?.replayingTo ?? "");
        const juliusomo = new Persons(julius?.id ?? 0, julius?.content ?? "", julius?.createdAt ?? "", julius?.score ?? 0, julius?.user.image.png ?? "", julius?.user.username ?? "", julius?.replayingTo ?? "");
        const addContent = (person, replies, input) => {
            const container = document.createElement("div");
            if (replies == 0) {
                container.classList.add("container");
            }
            else if (replies == 1 || replies == 2) {
                container.classList.add("container-2");
            }
            const line = document.createElement("div");
            line.classList.add("line");
            const containerReplyCard = document.createElement("div");
            containerReplyCard.classList.add("container-reply-card");
            const card = document.createElement("div");
            card.classList.add("card");
            const count = document.createElement("div");
            count.classList.add("count");
            const plusImg = document.createElement("img");
            plusImg.src = "interactive-comments-section-main/images/icon-plus.svg";
            plusImg.alt = "plus";
            plusImg.classList.add("plus");
            const countNumber = document.createElement("p");
            countNumber.classList.add("count-number");
            countNumber.textContent = person.score.toString();
            const minusImg = document.createElement("img");
            minusImg.src = "interactive-comments-section-main/images/icon-minus.svg";
            minusImg.alt = "minus";
            minusImg.classList.add("minus");
            const containerContent = document.createElement("div");
            containerContent.classList.add("container-content");
            const containerBanner = document.createElement("div");
            containerBanner.classList.add("container-banner");
            const containerInfo = document.createElement("div");
            containerInfo.classList.add("container-info");
            const userImg = document.createElement("img");
            userImg.classList.add("user-img");
            userImg.src = `${person.img}`;
            userImg.alt = "user-img";
            const username = document.createElement("p");
            username.classList.add("username");
            username.innerText = `${person.username}`;
            const data = document.createElement("p");
            data.classList.add("data");
            data.innerText = `${person.createdAt}`;
            const containerRepaly = document.createElement("div");
            containerRepaly.classList.add("container-reply");
            const replyImg = document.createElement("img");
            replyImg.src = "interactive-comments-section-main/images/icon-reply.svg";
            replyImg.alt = "replay";
            const replyText = document.createElement("p");
            if (replies === 0) {
                replyText.classList.add("reply-text");
            }
            else if (replies === 2 || replies === 1) {
                replyText.classList.add("reply-text-2");
            }
            replyText.innerText = "Reply";
            const userContent = document.createElement("p");
            userContent.classList.add("user-content");
            if (input !== undefined) {
                userContent.innerText = input;
            }
            else {
                userContent.innerText = `${person.content}`;
            }
            const containerResponse = document.createElement("div");
            containerResponse.classList.add("container-response");
            if (replies == 1) {
                card.appendChild(count);
                count.appendChild(plusImg);
                count.appendChild(countNumber);
                count.appendChild(minusImg);
                containerContent.appendChild(containerBanner);
                containerBanner.appendChild(containerInfo);
                containerInfo.appendChild(userImg);
                containerInfo.appendChild(username);
                containerInfo.appendChild(data);
                containerBanner.appendChild(containerRepaly);
                containerRepaly.appendChild(replyImg);
                containerRepaly.appendChild(replyText);
                containerContent.appendChild(userContent);
                card.appendChild(containerContent);
                containerReplyCard.appendChild(line);
                container.appendChild(card);
                containerResponse.appendChild(container);
                containerReplyCard.appendChild(containerResponse);
                main.appendChild(containerReplyCard);
            }
            else if (replies == 0) {
                card.appendChild(count);
                count.appendChild(plusImg);
                count.appendChild(countNumber);
                count.appendChild(minusImg);
                containerContent.appendChild(containerBanner);
                containerBanner.appendChild(containerInfo);
                containerInfo.appendChild(userImg);
                containerInfo.appendChild(username);
                containerInfo.appendChild(data);
                containerBanner.appendChild(containerRepaly);
                containerRepaly.appendChild(replyImg);
                containerRepaly.appendChild(replyText);
                containerContent.appendChild(userContent);
                card.appendChild(containerContent);
                container.appendChild(card);
                main.appendChild(container);
            }
            else if (replies == 2) {
                const contResp = document.querySelector(".container-response");
                if (contResp) {
                    // Construir la estructura del card
                    card.appendChild(count);
                    count.appendChild(plusImg);
                    count.appendChild(countNumber);
                    count.appendChild(minusImg);
                    containerContent.appendChild(containerBanner);
                    containerBanner.appendChild(containerInfo);
                    containerInfo.appendChild(userImg);
                    containerInfo.appendChild(username);
                    containerInfo.appendChild(data);
                    containerBanner.appendChild(containerRepaly);
                    containerRepaly.appendChild(replyImg);
                    containerRepaly.appendChild(replyText);
                    containerContent.appendChild(userContent);
                    card.appendChild(containerContent);
                    container.appendChild(card);
                    // Agregar el container al containerResponse existente
                    contResp.appendChild(container);
                }
            }
        };
        addContent(amyrobson, 0);
        addContent(maxblagun, 0);
        addContent(ramsesmiron, 1);
        addContent(juliusomo, 2);
        const footer = document.querySelector(".footer");
        const commentBox = (person, element) => {
            const containerImput = document.createElement("div");
            containerImput.classList.add("container-input");
            const userAI = document.createElement("img");
            userAI.src = `${person.img}`;
            userAI.alt = "juliusomo-img";
            const input = document.createElement("textarea");
            input.classList.add("input");
            input.placeholder = "Add a comment...";
            const send = document.createElement("p");
            send.classList.add("send");
            send.textContent = "send";
            containerImput.appendChild(userAI);
            containerImput.appendChild(input);
            containerImput.appendChild(send);
            element.appendChild(containerImput);
        };
        commentBox(juliusomo, footer);
        const container = document.querySelectorAll(".container");
        const container2 = document.querySelectorAll(".container-2");
        const reply = document.querySelectorAll(".reply-text");
        const reply2 = document.querySelectorAll(".reply-text-2");
        const addComment = (botton, div) => {
            botton.forEach((element, i) => {
                element.addEventListener("click", () => {
                    commentBox(juliusomo, div[i]);
                });
            });
        };
        addComment(reply, container);
        addComment(reply2, container2);
        const textareaBox = document.querySelectorAll(".input");
        const sendBotton = document.querySelectorAll(".send");
        const containerResponse = document.querySelector(".container-response");
        const clickSendBotton = (dom) => {
            dom.addEventListener("click", (e) => {
                const target = e.target;
                if (target.classList.contains("send")) {
                    const inputContainer = document.querySelector(".container-input");
                    const input = document.querySelector(".input");
                    let text = input.value;
                    if (text.trim() !== "") {
                        if (target.closest(".footer")) {
                            addContent(juliusomo, 0, text);
                            input.value = "";
                        }
                        else if (target.closest(".container-2")) {
                            addContent(juliusomo, 2, text);
                            input.value = "";
                            inputContainer.remove();
                        }
                        else if (target.closest(".container")) {
                            const container = target.closest(".container");
                            const newElement = addContent(juliusomo, 1, text);
                            container.parentNode?.insertBefore(newElement, container.nextSibling);
                            input.value = "";
                            inputContainer.remove();
                        }
                    }
                }
            });
        };
        clickSendBotton(main);
        clickSendBotton(footer);
        const plus = document.querySelectorAll(".plus");
        const minus = document.querySelectorAll(".minus");
        const countNumber = document.querySelectorAll(".count-number");
        // const sumAndRest = (action: NodeListOf<HTMLImageElement>) => {
        //   action.forEach((element, i) => {
        //     element.addEventListener("click", ()=>{
        //       let currentValue = Number(countNumber[i].textContent)
        //       if (action == plus) {
        //         const newNumber = Number(countNumber[i].textContent) +1
        //         countNumber[i].innerText = newNumber.toString()
        //       } else {
        //         if (currentValue > 0){
        //           const newNumber = Number(countNumber[i].textContent) -1
        //           countNumber[i].innerText = newNumber.toString()
        //         }
        //       }
        //     })
        //   });
        // }
        // sumAndRest(plus)
        // sumAndRest(minus)
    });
})(interChallenge01 || (interChallenge01 = {}));
