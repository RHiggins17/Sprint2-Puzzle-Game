var level0 = 
{ 
"COMMENT": "First Game Layout",
"type": "node",
"name": "rootNode",

"userData":
{
	"scripts": ["sceneControl"]
},

"children":
[
	{
		"COMMENT": "CAMERA LOOKING AT ORIGIN FROM ALONG THE Z AXIS",
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 20],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 30
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light1",
		"color": [1, 1, 0.5],
		"position": [0.5, 1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 1],
		"position": [-0.5, -1, 0.5]
	},
	{
		"COMMENT": "DIRECTIONAL LIGHT",
		"type": "directionalLight",
		"name": "light2",
		"color": [0.3, 0.3, 0.3],
		"position": [0, 0, 1]
	},

	// UP sphere
	{
		"type": "mesh",
		"name": "upSphere",
		"translate": [0, 2.5, 0],
		"scale": [1.0, 1.0, 1.0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.2, 1.0, 0.2]
		}
	},
	{
		"type": "mesh",
		"name": "uSphere",
		"translate": [0, 2.5, 0],
		"scale": [1.1, 1.1, 1.1],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.1, 0.3, 0.1]
		}
	},

	// DOWN sphere
	{
		"type": "mesh",
		"name": "downSphere",
		"translate": [0, -2.5, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [1.0, 0.2, 0.2]
		}
	},
	{
		"type": "mesh",
		"name": "dSphere",
		"translate": [0, -2.5, 0],
		"scale": [1.1, 1.1, 1.1],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.3, 0.1, 0.1]
		}
	},

	// LEFT sphere
	{
		"type": "mesh",
		"name": "leftSphere",
		"translate": [-2.5, 0, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.2, 0.2, 1.0]
		}
	},
	{
		"type": "mesh",
		"name": "lSphere",
		"translate": [-2.5, 0, 0],
		"scale": [1.1, 1.1, 1.1],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.1, 0.1, 0.3]
		}
	},

	// RIGHT sphere
	{
		"type": "mesh",
		"name": "rightSphere",
		"translate": [2.5, 0, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [1.0, 1.0, 0.2]
		}
	},
	{
		"type": "mesh",
		"name": "rSphere",
		"translate": [2.5, 0, 0],
		"scale": [1.1, 1.1, 1.1],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sphereMat",
			"diffuseColor": [0.3, 0.3, 0.1]
		}
	},
]
};

