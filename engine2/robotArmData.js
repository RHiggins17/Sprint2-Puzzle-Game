var level0 = { 
"COMMENT": "Car",
"type": "node",
"name": "rootNode",

"children":
[
	// CAMERA
	{
		"type": "perspectiveCamera",
		"name": "camera1",
		"eye": [0, 0, 18],
		"center": [0, 1, 0],
		"vup": [0, 1, 0],
		"fov": 20
	},

	// LIGHTS
	{
		"type": "directionalLight",
		"name": "dlight1",
		"color": [1, 1, 0.5],
		"position": [1, 2, 1]
	},
	{
		"type": "directionalLight",
		"name": "dlight2",
		"color": [0.1, 0.1, 0.3],
		"position": [-1, 0.1, 0.5]
	},
	{
		"type": "hemisphereLight",
		"name": "hlight",
		"skyColor": [0.3, 0.3, 0.6],
		"groundColor": [0.2, 0.3, 0],
		"intensity": 1.0
	},

	// ROBOT MODEL
	{
		"type": "node",
		"name": "robotRoot",
		"userData":
		{
			"scripts": ["robotController"]
		},
		"children":
		[
		// ARM 1
		{
			"type": "mesh",
			"name": "arm1",
			"scale": [0.1, 1, 0.1],
			"translate": [0, 1.0, 0],
			"geometry": "cube",
			"material": 
			{
				"type": "meshPhongMaterial",
				"diffuseColor": [1, 0.3, 0.3],
				"specular": [0.1, 0.1, 0.1],
				"shininess": 10
			}
		},
		// JOINT 1
		{
			"type": "node",
			"name": "joint1",
			"translate": [0, 2, 0],
			"children":
			[
				// JOINT SPHERE
				{
					"type": "mesh",
					"name": "arm2",
					"scale": [0.2, 0.2, 0.2],
					"geometry": "sphere",
					"material": 
					{
						"type": "meshPhongMaterial",
						"diffuseColor": [1, 0.3, 0.3],
						"specular": [0.1, 0.1, 0.1],
						"shininess": 10
					}
				},
				// ARM 2
				{
					"type": "mesh",
					"name": "arm2",
					"scale": [0.09, 0.5, 0.09],
					"translate": [0, 0.5, 0],
					"geometry": "cube",
					"material": 
					{
						"type": "meshPhongMaterial",
						"diffuseColor": [1, 0.3, 0.3],
						"specular": [0.1, 0.1, 0.1],
						"shininess": 10
					}
				}
			]
		}
		]
	}
]
}

