interface WorkImage {
    src: string,
    alt: string
}

export interface Work {
    service: string,
    reference: string,
    image: WorkImage
}


export const SITE_WORKS: Work[] = [
    {
        service: 'Letras Iluminadas',
        reference: 'Merengue',
        image: {
            src: 'trabajos/merengue/merengue.webp',
            alt: 'letras iluminadas'
        }
    },
    {
        service: 'Letras Iluminadas',
        reference: 'City Store',
        image: {
            src: 'trabajos/citystore/citystore.webp',
            alt: 'letras iluminadas'
        }
    },
    {
        service: 'Letras corporeas simil aluminio',
        reference: 'Ruco Hogar',
        image: {
            src: 'trabajos/rucohogar/rucohogar.webp',
            alt: 'Letras corporeas'
        }
    },
    {
        service: 'Letras corporeas',
        reference: 'Lavadero',
        image: {
            src: 'trabajos/lavadero/lavadero.webp',
            alt: 'letras corporeas'
        }
    },
    {
        service: 'Marquesina',
        reference: 'Agencia de Loteria',
        image: {
            src: 'trabajos/agencialoteria/agencialoteria.webp',
            alt: 'Marquesina loteria'
        }
    },
    {
        service: 'Fachada completa',
        reference: 'MotorGAS',
        image: {
            src: 'trabajos/motorgas/motorgas.webp',
            alt: 'fachada de frente con varios carteles'
        }
    }
]
