class HeroTextFixer{
    constructor(){
        this.heroText = document.querySelector('.about-page .hero__text')
  
        this.setup()
    }
  
    setup = () => {
        window.onresize = this.fixHeroText;
    }
  
    fixHeroText = () => {
        if(window.innerWidth >= 768 && window.innerWidth < 1024){
            let newHeight = window.innerWidth / 650
            this.heroText.style.lineHeight = newHeight
        }
    }
  
  
}
  
new HeroTextFixer


