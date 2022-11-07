var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d", {
    colorSpace: "srgb"
});

var img = document.createElement("img");

var url = URL.createObjectURL(await (await fetch("/webthumbnail?url=https://emailsanta.com")).blob());
img.src = url;

function toHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "00" + hex : hex;
}

img.addEventListener("load", function() {
    try {
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0, img.width, img.height);
        var data = ctx.getImageData(0, 0, img.width, img.height);

        var canvas2 = document.createElement("canvas");
        var ctx2 = canvas2.getContext("2d", {
            colorSpace: "srgb"
        });

        canvas2.width = img.width * 4;
        canvas2.height = img.height * 4;

        document.body.textContent = "";

        var pixels = [];
        
        for(let i = 0; i in data.data; i += 4) {
            pixels.push(data.data.slice(i, i + 4));
        }

        var xyPixels = [];

        for(let i = 0; i < data.height; i++) {
            xyPixels.push([]);
        }

        var x = 0;
        var y = 0;
        for(let i = 0; i < pixels.length - 1; i++) {
            xyPixels[y][x] = pixels[i];
            x++;

            if(x == data.width) {
                x = 0;
                y++;
            }
        }

        var x = 0;
        var y = 0;
        
        for(let i = 0; i in pixels; i++) {
            ctx2.fillStyle = "#" + toHex(pixels[i][1]) + toHex(pixels[i][2]) + toHex(pixels[i][3]);
            ctx2.fillRect(x * 4, y * 4, 4, 4);

            x++;
            if(x === data.width) {
                x = 0;
                y++;
            }
        }

        document.body.appendChild(canvas2);

        console.log(data);
    } catch(err) {
        console.error(err);
    }
});
