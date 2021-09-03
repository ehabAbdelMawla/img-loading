# img-loading
simple React Component To Display Loader untill Image Loaded Scuccessfully,
And Show Error Image When Target Image Cause Error

# Screenshots

![ezgif com-gif-maker](https://user-images.githubusercontent.com/51888513/132031682-8d447e53-3b0c-465a-aab1-cdd2838e6d1b.gif)

# Installation
<h3>npm</h3>

```
npm install img-loading --save
```

# Example Usage
```
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
```
.image-container{  /* Root Element */  }
 
.image-container img{  /* Your Image Element */  }

.image-container .image-container-overlay{ /* Loader Overlay Element */   }

```

Report an issue if you find there's something wrong

