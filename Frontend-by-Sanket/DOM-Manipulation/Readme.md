DOM IN JS

![1699808234077](image/Readme/1699808234077.png)

![1699808551812](image/Readme/1699808551812.png)

```Methods of Document Object:

write(“string”): Writes the given string on the document.

getElementById(): returns the element having the given id value.

getElementsByName(): returns all the elements having the given name value.

getElementsByTagName(): returns all the elements having the given tag name.

getElementsByClassName(): returns all the elements having the given class name.
```

```
<table>
	<ROWS>
		<tr>
			<td>Car</td>
			<td>Scooter</td>
		</tr>
		<tr>
			<td>MotorBike</td>
			<td>Bus</td>
		</tr>
	</ROWS>
</table>

```

![1699808647931](image/Readme/1699808647931.png)

# DOM: Document Object Model

**Document: the document that we are talking about is the html document.**

```
<html>
<<head></head>
<title></title>
<body></body>
</html>

```

```
Script tag :

Browser fetch the html page.

Begins parsing the html.

While parsing it encounters a script tag refering to external file.

Browser request the external file and block the parser, Hence parsing of html is halted.

Once the script is downloaded, it is executed subsequently and parser restarted.
```

# DOCUMENT :

**All the DOM properties available to us via browser.**

# Methods in DOM:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
  </body>
</html>


```

**1. getElementById() :**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
  </body>
</html>

```

```
 document.getElementById("top-main-text").style.color="red";

o/p:
```

![1701698318243](image/Readme/1701698318243.png)

```a. document.getElementById("top-main-text").style.cssText = "color:red; font-size:100px; letter-spacing:10px";```

**o/p:**

![1701708023002](image/Readme/1701708023002.png)

***2. getElementByClassName():**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
  </body>
</html>

```

```
  document.getElementByClassName("hello-all-header")

   or
   const element = document.getElementByClassName("hello-all-header");
   element.style.color="red";
   console.log(element);

   o/p:
```

![1701698210803](image/Readme/1701698210803.png)

3. getElementsByName():

   ```
   <!DOCTYPE html>
   <html lang="en">
   <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
   </head>
   <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
   </body>
   </html>

   ```

```
const ele = document.getElementByName("geeks");
console.log(ele);

console.log(ele[0]);
console.log(ele[1]);
o/p:

```

![1701701316426](image/Readme/1701701316426.png)

**1. getElementsByTagName():**

```
const ele = document.getElementsByTagName("p");

console.log(ele[0]);
console.log(ele[1]);
console.log(ele[2]);
console.log(ele[3]);
console.log(ele[4]);

o/p:



```

![1701702918718](image/Readme/1701702918718.png)

**5. querySelector() :**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
  </body>
</html>

```

```
const ele = document.querySelector(".para");
   const elem = document.querySelector("#parag");
   const eleme = document.querySelector("para");

console.log(ele,elem,eleme);

o/p :


```

![1701704453557](image/Readme/1701704453557.png)

**6. querySelectorAll() :**

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1 id="top-main-text" class="hello-all-header">Hello, all</h1>

    <ul id="listOfItem " class="hello-all-header">
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
      <li>Hello,everyone</li>
    </ul>

    <p class="para">How are you1,</p>
    <h1 id="parag">How are you2,</h1>
    <h2 class="paragr">How are you3,</h2>
    <h4 class="">How are you4,</h4>

    <div class="paragraph">Hi,Tanu1</div>
    <div class="paragraph">Hi,Tanu2</div>
    <div class="paragraph">Hi,Tanu3</div>
    <div class="paragraph">Hi,Tanu4</div>
    <div class="paragraph">Hi,Tanu5</div>

    <br />
    <input type="text" name="geeks" placeholder="Enter Your Name" />
    <br />
    <br />
    <input type="text" name="geeks" placeholder="Enter Contact details" />
    <script src="index.js"></script>
  </body>
</html>

```

```
 const divs = document.querySelectorAll("paragraph");
   console.log(divs);

o/p:



```

![1701705780494](image/Readme/1701705780494.png)

**7. innerHTML():**

   o/p:
   ![1701754456401](image/Readme/1701754456401.png)

**8. innerText():**

o/p:
![1701754541082](image/Readme/1701754541082.png)

**9. createElement():**

   o/p:
   ![1701757050984](image/Readme/1701757050984.png)

**10. textContent() :**

o/p:
![1701757106785](image/Readme/1701757106785.png)

**11. How to create element inside div?**

o/p: ![1701757699200](image/Readme/1701757699200.png)

    o/p:
    ![1701757588275](image/Readme/1701757588275.png)

**12. appendChild() and prepend() :**

o/p:
![1701758050404](image/Readme/1701758050404.png)

o/p:
![1701758102766](image/Readme/1701758102766.png)
