"use strict";
var ByteArray_1 = require("@awayjs/core/lib/utils/ByteArray");
/**
 *
 */
var ByteArrayTest = (function () {
    function ByteArrayTest() {
        var b1 = new ByteArray_1.default();
        b1.writeByte(0xFF);
        b1.writeByte(0xEE);
        b1.writeByte(0xDD);
        b1.writeByte(0xCC);
        b1.writeByte(0xBB);
        b1.writeByte(0xAA);
        var b2 = new ByteArray_1.default();
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.writeByte(0x00);
        b2.position = 0;
        b1.position = 0;
        b1.readBytes(b2, 2, 2);
        console.log('b1.position', b1.position);
        console.log('b2.length', b2.length, 'b2.position', b2.position);
        while (b2.getBytesAvailable()) {
            console.log(b2.readByte().toString(16));
        }
    }
    return ByteArrayTest;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzL0J5dGVBcnJheVRlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLDBCQUF3QixpQ0FBaUMsQ0FBQyxDQUFBO0FBRTFEOztHQUVHO0FBQ0g7SUFFQztRQUVDLElBQUksRUFBRSxHQUFhLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRXJCLElBQUksRUFBRSxHQUFhLElBQUksbUJBQVMsRUFBRSxDQUFDO1FBQ25DLEVBQUUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBQ3JCLEVBQUUsQ0FBQyxTQUFTLENBQUUsSUFBSSxDQUFFLENBQUM7UUFDckIsRUFBRSxDQUFDLFNBQVMsQ0FBRSxJQUFJLENBQUUsQ0FBQztRQUNyQixFQUFFLENBQUMsU0FBUyxDQUFFLElBQUksQ0FBRSxDQUFDO1FBRXJCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLEVBQUUsQ0FBQyxTQUFTLENBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUUsQ0FBQztRQUV6QixPQUFPLENBQUMsR0FBRyxDQUFFLGFBQWEsRUFBRyxFQUFFLENBQUMsUUFBUSxDQUFFLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBRSxXQUFXLEVBQUcsRUFBRSxDQUFDLE1BQU0sRUFBRyxhQUFhLEVBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBRSxDQUFDO1FBRXJFLE9BQVEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLEVBQzlCLENBQUM7WUFDQSxPQUFPLENBQUMsR0FBRyxDQUFFLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUUsRUFBRSxDQUFFLENBQUUsQ0FBQztRQUM3QyxDQUFDO0lBQ0YsQ0FBQztJQUNGLG9CQUFDO0FBQUQsQ0FqQ0EsQUFpQ0MsSUFBQSIsImZpbGUiOiJ1dGlscy9CeXRlQXJyYXlUZXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ5dGVBcnJheVx0XHRcdGZyb20gXCJhd2F5anMtY29yZS9saWIvdXRpbHMvQnl0ZUFycmF5XCI7XG5cbi8qKlxuICogXG4gKi9cbmNsYXNzIEJ5dGVBcnJheVRlc3Rcbntcblx0Y29uc3RydWN0b3IoKVxuXHR7XG5cdFx0dmFyIGIxOkJ5dGVBcnJheSA9IG5ldyBCeXRlQXJyYXkoKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4RkYgKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4RUUgKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4REQgKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4Q0MgKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4QkIgKTtcblx0XHRiMS53cml0ZUJ5dGUoIDB4QUEgKTtcblxuXHRcdHZhciBiMjpCeXRlQXJyYXkgPSBuZXcgQnl0ZUFycmF5KCk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cdFx0YjIud3JpdGVCeXRlKCAweDAwICk7XG5cblx0XHRiMi5wb3NpdGlvbiA9IDA7XG5cdFx0YjEucG9zaXRpb24gPSAwO1xuXG5cdFx0YjEucmVhZEJ5dGVzKCBiMiwgMiwgMiApO1xuXG5cdFx0Y29uc29sZS5sb2coICdiMS5wb3NpdGlvbicgLCBiMS5wb3NpdGlvbiApO1xuXHRcdGNvbnNvbGUubG9nKCAnYjIubGVuZ3RoJyAsIGIyLmxlbmd0aCAsICdiMi5wb3NpdGlvbicgLCBiMi5wb3NpdGlvbiApO1xuXG5cdFx0d2hpbGUgKCBiMi5nZXRCeXRlc0F2YWlsYWJsZSgpIClcblx0XHR7XG5cdFx0XHRjb25zb2xlLmxvZyggYjIucmVhZEJ5dGUoKS50b1N0cmluZyggMTYgKSApO1xuXHRcdH1cblx0fVxufSJdLCJzb3VyY2VSb290IjoiLi90ZXN0cyJ9
