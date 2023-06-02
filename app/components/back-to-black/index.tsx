'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../button'
import { useCallback, useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleScroll = useCallback(() => {
    if (!show && window.scrollY > 500) setShow(true)
    if (show && window.scrollY <= 500) setShow(false)
  }, [show])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="fixed right-4 bottom-4 z-20">
      {show ? (
        <Button
          onClick={scrollToTop}
          className="shadow-lg shadow-emerald-400/20"
        >
          <TbArrowNarrowUp size={20} />
        </Button>
      ) : null}
    </div>
  )
}

// vou tentar explicar os handle feitos, o objetivo foi so mostrar o simbolo de voltar ao topo so quando estivesse
// no bottom. pra isso foi usado 3 coisas . foi criado um estado para contrator se o set show sera renderizado ou não
// uma função pra alterar esse estado e um useeffect para atualizar e chamar essa função. a função usa funcoes nativas
// de eixo y pra detectar que parte da tela o usuario e assim mostrar so o bot~]ap quando ele estiver abaixo de um certa
// scroll da tela
