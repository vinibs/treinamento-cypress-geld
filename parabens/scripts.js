function openGift () {
    let gift = document.querySelector('.gift');
    let cover = document.querySelector('.gift .cover');
    let card = document.querySelector('.gift .card');
    let giftSubtitle = document.querySelector('.gift-subtitle');
    let cardSubtitle = document.querySelector('.card-subtitle');

    cover.classList.add('opening');
    card.classList.add('showing');
    giftSubtitle.classList.add('hide');
    cardSubtitle.classList.remove('hidden');
    cardSubtitle.classList.add('show');
    
    gift.removeAttribute('onclick');

    setTimeout(() => {
        giftSubtitle.classList.add('hidden');
    }, 1000);

    setTimeout(() => {
        card.setAttribute('onclick', 'hideCard()');
    }, 2000);
}

function hideCard () {
    let giftBack = document.querySelector('.gift .back');
    let giftFront = document.querySelector('.gift .front');
    let card = document.querySelector('.gift .card');
    let cardSubtitle = document.querySelector('.card-subtitle');
    let giftContent = document.querySelector('.gift-content');

    card.classList.remove('showing');
    card.classList.add('hiding');
    cardSubtitle.classList.remove('show');
    cardSubtitle.classList.add('hide');

    giftContent.classList.remove('hidden');
    giftContent.classList.add('opening');
    giftBack.classList.add('hide');
    giftFront.classList.add('hide');

    card.removeAttribute('onclick');
}

setTimeout(() => {
    let giftArea = document.querySelector('.gift-area');
    giftArea.classList.remove('hidden');
}, 1000);