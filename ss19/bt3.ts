function TheoDoiPass(sokytumin: number, sokytumax: number) {
    return function (target: any, propertyKey: string) {
      let value: string;
  
      const getter = function () {
        return value;
      };
  
      const setter = function (newVal: string) {
        if (newVal.length < sokytumin || newVal.length > sokytumax) {
          throw new Error(`Độ dài password phải từ ${sokytumin} đến ${sokytumax} ký tự`);
        }
        value = newVal;
      };
  
      Object.defineProperty(target, propertyKey, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
      });
    };
  }
  
  class User {
    'username': string;
  
    @TheoDoiPass(6, 12)
    'password': string;
  }
  
  // Sử dụng
  const user = new User();
  user.username = 'johndoe';
  
  // Gán giá trị hợp lệ cho password
  user.password = 'mypassword'; // OK
  
  // Gán giá trị không hợp lệ cho password
  user.password = 'short'; // Lỗi: Độ dài password phải từ 6 đến 12 ký tự
  user.password = 'verylongpassword'; // Lỗi: Độ dài password phải từ 6 đến 12 ký tự