# Recreate Mini DALL-E
*Recreate Mini DALL-E : A Text-to-Image Generation Model.*

January 2022

The source code of the project is accessible here : [Colab notebook](https://colab.research.google.com/drive/1s1L8Myrl24q40SB87AP0Bp-iCDhhlzPP?usp=sharing). Be carefull, it takes a lot of time to compute and run.

![Mini Dall-e example](/project_6.jpg)


## Inspirations
Our goal with this project was to develop a machine learning model that could generate images based on text descriptions, similar to how OpenAI's DALL-E works. This project being complicated, we search for a simpler alternative. We found a project called mini DALL-e, which is open source and presents a way to generate image from texts. Finally, the model requiring a huge amount of computation power, we focused on a simpler approach called VQ-GAN+CLIP.

### Mini DALL-E model
The idea of Mini DALL-E is to create a model that encodes texts into a latent space and decode image from this latent space. At the end, the model uses the CLIP model to choose the best image corresponding to the text input.
To succeed, the Mini DALL-E team use the BART encoder and decoder to process the input text. For the image part, they used a VQ-GAN encoder and decoder. 
A GAN, also called a generative adversarial netwok is a model which is composed of two CNN, the first CNN is called a generator and 

### VQ-GAN + CLIP

## Understanding of generative models
First, let's understand how 
## Our model
### The topology of Mini DALL-E
### Tools and Technics
### Issue Encountered
## Conclusion



Tools and Techniques
Thank you for visiting our page and we hope you enjoy learning about our project!