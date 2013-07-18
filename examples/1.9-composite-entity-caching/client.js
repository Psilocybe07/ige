var Client = IgeClass.extend({
	classId: 'Client',
	init: function () {
		var self = this;
		ige.showStats(1);
		ige.input.debug(true);
		ige.globalSmoothing(true);

		// Load our textures
		self.obj = [];

		// Load the fairy texture and store it in the gameTexture object
		self.gameTexture = {};
		self.gameTexture.fairy = new IgeTexture('./assets/textures/sprites/fairy.png');

		// Load a smart texture
		self.gameTexture.simpleBox = new IgeTexture('./assets/textures/smartTextures/simpleBox.js');

		// Wait for our textures to load before continuing
		ige.on('texturesLoaded', function () {
			// Create the HTML canvas
			ige.createFrontBuffer(true);

			// Start the engine
			ige.start(function (success) {
				// Check if the engine started successfully
				if (success) {
					// Create the scene
					self.rootScene = new IgeScene2d()
						.id('rootScene');
					
					self.mainScene = new IgeScene2d()
						.id('mainScene')
						.mount(self.rootScene);

					// Create the main viewport and set the scene
					// it will "look" at as the new mainScene we just
					// created above
					self.vp1 = new IgeViewport()
						.id('vp1')
						.autoSize(true)
						.scene(self.rootScene)
						.drawBounds(true)
						.drawCompositeBounds(true)
						.mount(ige);

					// Create a composite entity
					self.obj[0] = new Rotator(0.1)
						.id('fairy1')
						.depth(1)
						.width(100)
						.height(100)
						.texture(self.gameTexture.fairy)
						.translateTo(20, 30, 0)
						.compositeCache(true)
						.mount(self.mainScene);
					
					self.obj[1] = new Rotator(0)
						.id('fairy2')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.fairy)
						.translateTo(-180, -60, 0)
						.mount(self.obj[0]);

					self.obj[2] = new Rotator(0)
						.id('fairy3')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.fairy)
						.translateTo(0, 50, 0)
						.mount(self.obj[0]);

					self.obj[3] = new Rotator(0)
						.id('simpleBox1')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.simpleBox)
						.translateTo(0, -50, 0)
						.mount(self.obj[0]);
					
					self.obj[4] = new Rotator(0)
						.id('fairy4')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.fairy)
						.translateTo(-50, 0, 0)
						.mount(self.obj[0]);
					
					self.obj[5] = new Rotator(0)
						.id('fairy5')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.fairy)
						.translateTo(150, 0, 0)
						.mount(self.obj[0]);
					
					self.obj[6] = new Rotator(0)
						.id('fairy6')
						.depth(1)
						.width(50)
						.height(50)
						.texture(self.gameTexture.fairy)
						.translateTo(150, 0, 0)
						.rotateTo(0, 0, Math.radians(45))
						.mount(self.obj[5]);
					
					ige.$('fairy1')._rotate.z = Math.radians(45)
				}
			});
		});
	}
});

if (typeof(module) !== 'undefined' && typeof(module.exports) !== 'undefined') { module.exports = Client; }