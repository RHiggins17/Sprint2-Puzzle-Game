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
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": 1.0
	},
		{
		"type": "mesh",
		"name": "sphere1",
		"scale": [0.3, 0.3, 0.3],
		"translate": [-2, 2, -1.5],
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
		"name": "sphere2",
		"scale": [0.3, 0.3, 0.3],
		"translate": [0, 2, -1.5],
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
		"name": "sphere3",
		"scale": [0.3, 0.3, 0.3],
		"translate": [2, 2, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sm2",
			"color": [1.0, 0, 0],
			"specular": [0.08, 0.08, 0.08],
			"shininess": 80
		}
	},
	{
		"type": "mesh",
		"name": "sphere4",
		"scale": [0.3, 0.3, 0.3],
		"translate": [-2, 0, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sm2",
			"color": [1.0, 0, 0],
			"specular": [0.08, 0.08, 0.08],
			"shininess": 80
		}
	},
	{
		"type": "mesh",
		"name": "sphere5",
		"scale": [0.3, 0.3, 0.3],
		"translate": [0, 0, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sm2",
			"color": [0, 1.0, 1.0],
			"specular": [0.10, 0.08, 0.06],
			"shininess": 80
		}
	},
	{
		"type": "mesh",
		"name": "sphere6",
		"scale": [0.3, 0.3, 0.3],
		"translate": [2, 0, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshLambertMaterial",
			"name": "sm2",
			"color": [0, 1.0, 1.0],
			"specular": [0.10, 0.08, 0.06],
			"shininess": 80
		}
	},
	{
		"type": "mesh",
		"name": "sphere7",
		"scale": [0.3, 0.3, 0.3],
		"translate": [-2, -2, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm3",
			"color": [1.0, 0, 1.0],
			"specular": [0.03, 0.03, 0.03],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "sphere8",
		"scale": [0.3, 0.3, 0.3],
		"translate": [0, -2, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm3",
			"color": [1.0, 0, 1.0],
			"specular": [0.03, 0.03, 0.03],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "sphere9",
		"scale": [0.3, 0.3, 0.3],
		"translate": [2, -2, -1.5],
		"geometry": "sphere",
		"widthSegments": 32,
		"heightSegments": 16,
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "sm3",
			"color": [1.0, 1.0, 1.0],
			"specular": [0.03, 0.03, 0.03],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "cube1",
		"scale": [1, 1, 1],
		"translate": [-3, 3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0, 0],
			"specularColor": [0.01, 0.01, 0.01],
			"shininess": 200
		}
	},
	{
		"type": "mesh",
		"name": "cube2",
		"scale": [1, 1, 1],
		"translate": [0, 3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0, 1, 0]
		}
	},
	{
		"type": "mesh",
		"name": "cube3",
		"scale": [1, 1, 1],
		"translate": [3, 3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0, 0, 1]
		}
	},
	{
		"type": "mesh",
		"name": "cube4",
		"scale": [1, 1, 1],
		"translate": [3, 0, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0, 1, 1]
		}
	},
	{
		"type": "mesh",
		"name": "cube5",
		"scale": [1, 1, 1],
		"translate": [0, 0, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 1, 0]
		}
	},
	{
		"type": "mesh",
		"name": "cube6",
		"scale": [1, 1, 1],
		"translate": [-3, 0, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0, 1]
		}
	},
	{
		"type": "mesh",
		"name": "cube7",
		"scale": [1, 1, 1],
		"translate": [-3, -3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [1, 0.5, 0]
		}
	},
	{
		"type": "mesh",
		"name": "cube8",
		"scale": [1, 1, 1],
		"translate": [0, -3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0, 0.5, 1]
		}
	},
	{
		"type": "mesh",
		"name": "cube9",
		"scale": [1, 1, 1],
		"translate": [3, -3, 0],
		"geometry": "cube",
		"material": 
		{
			"type": "meshPhongMaterial",
			"name": "cubeMat",
			"diffuseColor": [0.5, 1, 0.5]
		}
	}
]
}
