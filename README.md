# Project-Calculator

Boş ise
    * Rakam koyabilirim
    * . koyarsam başına 0 gelir ve 0. olur
    * +, -, x, / koyamam

0 ise
    * Rakam girersem, 0  yeni girdiğim rakama dönüşür
    * . koyabilirim
    * +, -, x, / koyabilirim

. ise
    * rakam girebilirim 
    * . giremem
    * +, -, x, /, bu operatorleri ekleyebilirim ancak "." eksiltmem gerekir.

operator ise
    * Operator ve = giremem.
    * Rakam girebilirim
    * . girersem, başına otomatik 0 koyar.

eğer rakam ise 
    * rakam ekleyebilirim
    * Eğer operator kullanılmamışsa, operator veya "=" ekleyebilirim. Eğer "=" eklersem lastoperation currentoperation + "=" olarak düzenlenicektir, ancak currentoperation sabit kalıcaktır. Fakat operator eklersem, yalnızca currentoperation'a eklenicektir.
    * Eğer operator kullanılmışsa, operator'a veya "="'a tıklanılabilir ve ikisi de varolan işlemi operatoru ile hesaplatacaktır. currentoperationdaki metin, olduğu gibi lastoperationa aktarılıp sonuna "=" sembolu eklenecektir. Hesaplanan değer current operationda kalacaktır. Eğer "=" kullanıldıysa, currentoperationda yalnızca hesaplanan değer kalıcaktır. Operator kullanıldıysa, hesaplanan değere ilaven yeni operator eklenicektir.
    * Eğer hiç operator kullanılmadıysa, 1 adet "." kulalnılabilir. Eğer operatör kullanıldıysa, 2. "." operator'dan sonra kullanılmalıdır.


