export interface ProjectsDesigner {
    annee: string
    created_at: string
    description: string | null
    fini: boolean
    IA: boolean
    id: number
    img?: string
    lien_url: string
    logiciels?: string[]
    mois: string | null
    nom_projet: string
    organisme: string
    tags?: string[]
    titre: string
}