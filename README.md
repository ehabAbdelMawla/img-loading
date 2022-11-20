<br />
<div align="center">
  <a href="https://github.com/ehabAbdelMawla/img-loading">
   <img src="https://user-images.githubusercontent.com/51888513/189497092-eeb07586-b190-45fb-b29b-95fc42f3c469.gif" width="350"  />
  </a>
  <h2 align="center">Img Loading</h2>
  <p align="center">
  React Package Which Display Loader until Image Loaded Successfully, And Show Error Image When Target Image Cause Error
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li><a href="#built-with">Built With</a></li>
        <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
 <img src="https://user-images.githubusercontent.com/51888513/132089942-f2138b6b-dc06-43a4-b053-1e70b94ca977.gif"   />
 
  <p>Package Provide A Loading Component To View While Image Loading And View Another Image If Loading Error </p>

## Built With

 <kbd><img src="https://user-images.githubusercontent.com/51888513/188966114-ac50454b-7d33-4985-98f9-231b6ecea713.png" width="18" style="border-radius:5px; margin:5px"/> </kbd> ReactJs <br/>

 <!-- GETTING STARTED -->
## Getting Started 
  
### Installation

```sh
npm install img-loading --save
```

<!-- USAGE EXAMPLES -->
## Usage

```js
import React, { Component } from 'react'
import ImageLoader from "img-loading"
class App extends Component {
  
     render() {
      return(
        <ImageLoader 
            imageSrc={"https://example.com/image_1"}
            errorImageSrc={"https://example.com/image_1"}  
            loader={LoaderComponent}
            alt={"acount image"}
          />
      )
     }
}
export default App

```
# Props
| Prop Name  | Description | Type |
| ------------- | ------------- |------------- |
| imageSrc  | `scr` Attribute For Image To Load | string |
| errorImageSrc | `scr` Attribute For Image To Load When Main Image Cause Error | string |
| loader  | Loader Component to Display While Image Loading | Component |
| alt  | `alt` Attribute For Image  | string |

# Customize Style
```css
.image-container{  /* Root Element */  }
 
.image-container img{  /* Your Image Element */  }

.image-container .image-container-overlay{ /* Loader Overlay Element */   }

```

<!-- CONTACT -->
## Contact
<p align="center">
<a  href="mailto:eabdo1474@gmail.com">
 <img src="https://user-images.githubusercontent.com/51888513/188922645-da22d955-0b02-46d9-8145-564b54316d87.png" width="50"/> 
</a>
<a href="https://www.youtube.com/channel/UCnoe7bD7w2fWYlNzqY3qjLA">
<img src="https://user-images.githubusercontent.com/51888513/188924271-4554ab67-60b6-46db-9d38-b5d284bfc324.png" width="50"/>
</a>
<a href="https://www.linkedin.com/in/ehab-abdel-mawla-9b20aa183">
<img src="https://user-images.githubusercontent.com/51888513/188924356-4578aa1f-26c0-4310-a16d-f4eb3c891b8d.png" width="50"/>
</a>
<a href="https://codepen.io/ehabAbdelMola"><img src="https://user-images.githubusercontent.com/51888513/188924374-5169b372-1eda-4639-95b7-ceacbe31b861.png"   width="50"/> </a>
<a href="https://www.instagram.com/abdoehab4551/"><img src="https://user-images.githubusercontent.com/51888513/188924858-1b4bd316-4259-4f22-be15-0872c31ebc12.png"   width="50"/> </a>

</p>


