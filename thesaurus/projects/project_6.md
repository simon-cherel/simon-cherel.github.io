# Recreate Mini DALL-E
*Recreate Mini DALL-E : A Text-to-Image Generation Model.*

January 2022

Special thanks to [Capucine Viougeat](https://cviougeat.github.io) for the long hours of work together and special thanks to [Hossam Afifi](http://www-public.int-evry.fr/~afifi/) for introduction to ML course.

The source code of the project is accessible here : [Colab notebook](https://colab.research.google.com/drive/1s1L8Myrl24q40SB87AP0Bp-iCDhhlzPP?usp=sharing). Be carefull, it takes a lot of time to compute and run.

![Mini Dall-E example](/project_6.jpg)


## Inspirations

Our goal with this project was to develop a machine learning model that could generate images based on text descriptions, similar to how OpenAI's DALL-E works. This project being complicated, we search for a simpler alternative. We found a project called mini DALL-E, which is open source and presents a way to generate image from texts. Finally, the model requiring a huge amount of computation power, we focused on a simpler approach called VQ-GAN+CLIP.

### Mini DALL-E model
The idea of Mini DALL-E is to create a model that encodes texts into a latent space and decode image from this latent space. At the end, the model uses the CLIP model to choose the best image corresponding to the text input. The CLIP ([see more here](https://openai.com/blog/clip/)) model is an OpenAI model that match the content of an image with some text.
To succeed, the Mini DALL-E team use the BART (a similar project of the well famous BERT model, see more information here : [click to access the research paper](https://arxiv.org/abs/1910.13461)) encoder and decoder to process the input text. For the image part, they used a VQ-GAN encoder and decoder.

### VQ-GAN 

![The VQ-GAN Schematic](/project_6_1.jpg)

A GAN, also called a generative adversarial network is a model which is composed of two CNN, the first CNN is called a generator and the second is called a discriminator. The idea behind it is that the generator creates an image from some noise and the discriminator tells if the image created characteristics correspond to the input requirements.
In the case of Mini DALL-E, the model being a VQ-GAN, the generator is not a simple CNN but is specific model called a VQ-AE (Vector Quantised Variational AutoEncoder). An autoencoder is a model that has been created to upgrade the image quality while downgrading the image information. To do so, the model is composed of three elements, the CNN encoder, the latent space and the CNN decoder. The idea is that the latent space has a limited size, which forces the encoder to reduce the information from the input image and forces the decoder to extrapolate some information to produce the output image. This mechanism helps to reduce noise in pictures for example. The quantization aspect here is the fact the latent space is discretized in a codebook composed of specific vectors. In practice, input latent space images are projected into the codebook vector space.

### Training

![Training Schematic](/project_6_2.jpg)

To train this model, the Mini DALL-E team used image labeled dataset. For each element of the dataset, the VQ-GAN encoder has been fed by a picture while feeding the BART encoder with the label of the image. The goal being to match the two outputs.

### Inference time 

![Inference Schematic](/project_6_3.jpg)

To produce the expected results, the Mini DALL-E team takes the input text, feeds the BART model with it and then feeds the VQ-GAN decoder with the BART output to produce the picture.

## VQ-GAN + CLIP

Thanks to this introduction of the state of the art, you pretty know everything we used in our project.
Our means being limited, we tried to find a simpler model than Mini DALL-E. We found that some people tried to generate image from text with a model called VQ-GAN CLIP ([see the research paper here](https://arxiv.org/abs/2204.08583)).
The simple idea behind this model is to generate images from a VQ-GAN, but the specificity of this VQ-GAN is that the discriminator CNN is replaced by the CLIP model.

### Tools and Issue Encountered
Our work was to reimplemented this structure without the vector quantization codebook, a structure called GAN CLIP. We limited our training and creation on generating images of written numbers. To do so, we used the famous MNIST dataset. 

To produce our model, we mainly used Tensorflow ([see the GAN model here](https://www.tensorflow.org/tutorials/generative/dcgan)). However, the CLIP model provides by OpenAI being designed with pytorch, we didn't succeed to train the GAN because of library compatibility. 

### CLIP Handcrafted

![CLIP Topology](/project_6_4.jpg)

At this period of time, we didn't find an equivalent model on Tensorflow, so we tried to build one ourselves. To succeed, we used a keras model called Xception to encode images and we used the BERT ([see the research paper here](https://arxiv.org/abs/1810.04805)) model to encore texts, then we calculated the similarities with the two outputs thanks to cross entropy and matrix multiplication functions.

## Complements

If the topic interests you, there is a great article that explains a bit further what I shorted here. You can access it here : [click here to access the article](https://ljvmiranda921.github.io/notebook/2021/08/08/clip-vqgan/).

