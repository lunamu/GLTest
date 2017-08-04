#version 330 core

in vec3 ourColor;
in vec2 TexCoord;
in vec3 verpos;
out vec4 color;

uniform sampler2D ourTexture1;
uniform vec4 outColor;

void main()
{
	color = texture(ourTexture1, TexCoord);
};
