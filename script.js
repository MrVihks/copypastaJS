const generateBtn = document.querySelector("#generate");
const display = document.querySelector('#display');
const copyBtn = document.querySelector(".copyoff");
document.addEventListener('click', (e)=>{
    const el = e.target;
    if(el === generateBtn){
        e.preventDefault();
        copyBtn.classList.add("copy")
        const input = document.querySelector("#input").value.trim();
        const repeater = document.querySelector('#repeat').value.trim();
        if (input === " "){
            alert("Não foi encontrado texto digitado..");
            return;
        };


        const copypasta = generateCopy(input, repeater);
        display.innerHTML = copypasta;
    };
    if(el === copyBtn){
        const select = window.getSelection();
        const interval = document.createRange();

        interval.selectNodeContents(display);
        select.removeAllRanges();
        select.addRange(interval);
        document.execCommand('copy');
        alert("A copypasta foi copiada com sucesso !!!");
    };
});
const generateCopy = (text, repeat)=>{
    let copypasta = '';
    let x = 0;
    if( text !== null && text !== undefined){
        while(x < repeat){
            copypasta = copypasta + `**${text.toUpperCase()}**\n\n`;
            copypasta = copypasta + `_${text.toLowerCase()}_\n\n`;
            copypasta = copypasta + `> ${text.replace(/\n/g, '\n> ')}\n\n`;
            copypasta = copypasta + `**${text.toUpperCase()}**`;
            x = x + 1;
        };
        return copypasta;
    };
};