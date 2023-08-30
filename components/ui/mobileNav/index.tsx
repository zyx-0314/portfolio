import { ButtonProps, StyledButton } from '../buttons';
import { MenuCloseButton, MenuContainer } from './style';

interface MobileNavProps
{
  buttonList: ButtonProps[];
  isMenuOpen: boolean;
  handleMenu: ( params: boolean ) => void;
}

const MobileNav = ( { buttonList, isMenuOpen, handleMenu }: MobileNavProps ) =>
{
  return (
    <>
      <MenuContainer isOpen={ isMenuOpen }>
        <MenuCloseButton onClick={ () => handleMenu( false ) }>X</MenuCloseButton>
        <ul className='flex flex-col items-center'>
          { buttonList.map( ( button, index ) => (
            <li key={ index } onClick={ () => handleMenu( false ) }>
              <StyledButton
                params={ button }
              />
            </li>
          ) ) }
        </ul>
      </MenuContainer>
      <div
        className='bg-white opacity-25  w-full h-[100vh] fixed z-50'
        onClick={ () => handleMenu( false ) }
      />
    </>
  )
}

export default MobileNav