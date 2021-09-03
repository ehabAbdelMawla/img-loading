import React, { Component } from 'react'
import "./style.css";
class ImageLoader extends Component {

    state = {
        error: false,
        loaded: false,
    }

    imageLoad = () => {
        this.setState({
            loaded: true
        })
    }

    errorOccure = () => {
        this.setState({
            error: true
        })
    }


    render() {
         const { props}=this
        const {loader : Loader} = props
       
        return (
            <section className={"image-container"}>
                <img
                    draggable="false"
                    src={this.state.error ? props.errorImageSrc : props.imageSrc ? props.imageSrc : props.errorImageSrc}
                    onLoad={this.imageLoad}
                    onError={this.errorOccure}
                    loading="lazy"
                    alt={ this.props.alt || "image"}
                />
                {!this.state.loaded && (
                    <article className="image-container-overlay">
                        {Loader ? <Loader /> :<span> Loading ...</span>}
                    </article>
                )}
            </section>
        )
    }
}


export default ImageLoader
