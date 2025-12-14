uniform float uTime;
uniform float uPixelRatio;
uniform float uSize;
uniform vec3 uMouse;

attribute float aScale;
attribute vec3 aRandomness;

varying vec3 vColor;

void main() {
    vec4 modelPosition = modelMatrix * vec4(position, 1.0);
    
    // Add some subtle movement based on time and randomness
    modelPosition.x += sin(uTime * aRandomness.x) * 0.2;
    modelPosition.y += cos(uTime * aRandomness.y) * 0.2;
    modelPosition.z += sin(uTime * aRandomness.z) * 0.2;

    // Mouse repulsion
    float dist = distance(modelPosition.xy, uMouse.xy);
    float radius = 4.0;
    float strength = 1.0 - min(dist / radius, 1.0);
    strength = pow(strength, 3.0);

    vec2 direction = normalize(modelPosition.xy - uMouse.xy);
    modelPosition.xy += direction * strength * 2.0;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectionPosition = projectionMatrix * viewPosition;

    gl_Position = projectionPosition;
    
    // Size attenuation
    gl_PointSize = uSize * aScale * uPixelRatio;
    gl_PointSize *= (1.0 / - viewPosition.z);

    vColor = vec3(0.8, 0.9, 1.0); // Default light blueish
}