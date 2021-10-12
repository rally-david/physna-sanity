import React from "react";

// While we recommend SVGs, an alternative is to use a regular image (png, jpg)
// Notice how we're "importing" the path from a local image - when building the
// studio, this image will automatically be part of the output bundle, with a
// hash that will make it easy to invalidate on changes.
import logo from "./physna2-small-square-white.png";

const ImgLogo = () => <img src={logo} width="auto" height="30" />;

export default ImgLogo;
