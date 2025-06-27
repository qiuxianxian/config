window.em.getLocation = function(options) {
    console.warn('调用 getLocation', options)
    PJF.client.getLocation(resp => {
        console.log('getLocation 结果', resp)
        if (resp.success) {
            const coordinates = [{
                    latitude: "22.525080345224477",
                    longitude: "113.93580921742777",
                    address: "中国广东省深圳市南山区滨海大道辅路",
                    street: "滨海大道辅路"
                },
                {
                    latitude: "22.521408081056673",
                    longitude: "113.93727111816258",
                    address: "中国广东省深圳市南山区海德三道",
                    street: "海德三道"
                },
                {
                    latitude: "22.52268991460753",
                    longitude: "113.93643465578079",
                    address: "中国广东省深圳市南山区海德三道170号",
                    street: "海德三道"
                },
                {
                    latitude: "22.523953157930254",
                    longitude: "113.9360454944278",
                    address: "中国广东省深圳市南山区滨海大道",
                    street: "滨海大道"
                },
                {
                    latitude: "22.525618238139394",
                    longitude: "113.93706397643975",
                    address: "中国广东省深圳市南山区海天二路",
                    street: "海天二路"
                },
                {
                    latitude: "22.52590746736793",
                    longitude: "113.93498777360735",
                    address: "中国广东省深圳市南山区海天二路15号",
                    street: "海天二路"
                }
            ];


            const randomIndex = Math.floor(Math.random() * coordinates.length);
            const selectedCoordinates = coordinates[randomIndex];


            console.log(`latitude: ${selectedCoordinates.latitude}, longitude: ${selectedCoordinates.longitude}`);


            resp.result.latitude = selectedCoordinates.latitude;
            resp.result.longitude = selectedCoordinates.longitude;
            resp.result.address = selectedCoordinates.address;
            resp.result.street = selectedCoordinates.street;


            resp.result.province = "广东省";
            resp.result.city = "深圳市";
            resp.result.district = "南山区";
            options.success && options.success(resp.result)
        } else {
            resp.errMsg = '定位失败，请重试'
            options.fail && options.fail(resp)
        }
    })
}
