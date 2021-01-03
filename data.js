var APP_DATA = {
  "scenes": [
    {
      "id": "0-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1750,
      "initialViewParameters": {
        "yaw": -3.0694356547022323,
        "pitch": 0.16312637279462372,
        "fov": 1.3500113610588993
      },
      "linkHotspots": [
        {
          "yaw": -0.40794088197904976,
          "pitch": 0.12638907553540335,
          "rotation": 6.283185307179586,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1718.5,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.183938250195607,
          "pitch": 0.08841975478965125,
          "rotation": 0,
          "target": "0-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Trial Home",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
