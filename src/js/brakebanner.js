class BrakeBanner{
	pxApp
	container

	constructor(selector){
		this.pxApp = new PIXI.Application({
			width: 1200,
			height: 1200,
			antialias: false,    // default: false 反锯齿  使字体和图形边缘更加平滑
			transparent: false, // default: false 透明度 使canvas背景透明
			resolution: 1       // default: 1 分辨率
		});

		this.pxApp.renderer.backgroundColor = 0xf2f2f2

		let htmlElement = document.getElementById(selector)
		htmlElement.appendChild(this.pxApp.view)

		this.container = new PIXI.Container();

		this.pxApp.stage.addChild(this.container);
	}

	addBtn() {

		const texture = PIXI.Texture.from('images/btn.png')


		const bunny = new PIXI.Sprite(texture);

		this.container.addChild(bunny);



	}
}
