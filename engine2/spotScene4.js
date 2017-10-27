var objects = { 
"COMMENT": "Hemispherical light",
"type": "node",
"name": "rootNode",

"children":
[
	{
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 20],
		"center": [0, 0, 0],
		"vup": [0, 1, 0],
		"fov": 23
	},
	{
		"type": "directionalLight",
		"name": "dlight",
		"color": [0.2, 0.2, 0.1],
		"position": [1, 2, 1]
	},
	{
		"type": "spotLight",
		"name": "slight", 
		"position": [-1.5,5,1],
		"target": "spotTarget",
		"color": [1.5, 1.3, 0.9],
		"intensity": 1.0,
		"angle": 0.7,
		"penumbra": 0.1,
		"decay": 1.0,
		"distance": 100,
		"castShadow": true,
		"mapSize": 512
	},
		{
		"type": "mesh",
		"name": "leftSphere",
		"scale": [1, 1, 1],
		"translate": [-4, 1, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshBasicMaterial",
			"name": "sm1",
			"color": [0, 0, 1.0],
			"specular": [0.8, 0.8, 0.8],
			"shininess": 10
		}
	},
	{
		"type": "mesh",
		"name": "middleSphere",
		"scale": [1, 1, 1],
		"translate": [0, 1, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sm2",
			"color": [0, 0, 1.0],
			"specular": [0.08, 0.08, 0.08],
			"shininess": 80
		}
	},
	{
		"type": "mesh",
		"name": "rightSphere",
		"scale": [1, 1, 1],
		"translate": [4, 1, 0],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm3",
			"color": [0, 0, 1.0],
			"specular": [0.03, 0.03, 0.03],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "theCube",
		"scale": [1, 1, 1],
		"translate": [-4, -1, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshBasicMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0, 0],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "theCube",
		"scale": [1, 1, 1],
		"translate": [0, -1, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0, 0],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "theCube",
		"scale": [1, 1, 1],
		"translate": [4, -1, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0, 0],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 200
		}
	}
]
}

