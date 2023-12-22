import './CampoTexto.css'

interface CampoTextoProps {
    aoAlterado: (evento: any) => void
    label: string
    valor: string
    required?: boolean
    placeholder: string
    tipo?: 'text' | 'date' | 'number' | 'email'
}

const CampoTexto = ({ aoAlterado, label, valor, required, placeholder, tipo = 'text'}: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...` 

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input
                value={valor}
                onChange={aoDigitado}
                required={required}
                placeholder={placeholderModificada}
                type={tipo}
            />
        </div>
    )
}

export default CampoTexto