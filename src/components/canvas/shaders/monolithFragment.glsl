uniform sampler2D uTexture;
uniform float uHover;
uniform float uTime;
uniform vec3 uColor;

varying vec2 vUv;
varying vec3 vNormal;
varying vec3 vViewPosition;

void main() {
    // Normal and View Direction
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(vViewPosition);

    // Fresnel
    float fresnel = dot(viewDir, normal);
    fresnel = clamp(1.0 - fresnel, 0.0, 1.0);
    fresnel = pow(fresnel, 3.0);

    // Texture with subtle distortion on hover
    vec2 uv = vUv;
    uv.x += sin(uv.y * 10.0 + uTime) * 0.01 * uHover;
    
    vec4 textureColor = texture2D(uTexture, uv);

    // Mix texture with glass color based on hover
    vec3 finalColor = mix(textureColor.rgb, uColor, fresnel * 0.5);
    
    // Add "Digital" scanline effect
    float scanline = sin(uv.y * 100.0 + uTime * 2.0) * 0.05;
    finalColor += scanline * uHover;

    // Highlight edges on hover
    finalColor += vec3(1.0) * fresnel * uHover * 0.5;

    gl_FragColor = vec4(finalColor, 0.8 + fresnel * 0.2);
}