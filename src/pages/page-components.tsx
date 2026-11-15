import Badge from "../components/badge"
import Button from "../components/button"
import ButtonIcon from "../components/button-icon"
import Card from "../components/card"
import Container from "../components/container"
import Icon from "../components/icon"
import InputCheckbox from "../components/input-checkbox"
import InputText from "../components/input-text"
import Skeleton from "../components/skeleton"
import Text from "../components/text"

import TrashIcon from "../assets/icons/trash.svg?react"
import SpinnerIcon from "../assets/icons/spinner.svg?react"

function PageComponents() {

  return (
    <Container>
      <div>
        <div>
          <Text variant="body-md-bold" className="">Olá mundo!</Text>
          <Text variant="body-md" className="">Olá mundo!</Text>
          <Text variant="body-sm-bold" className="">Olá mundo!</Text>
        </div>

        <div>
          <Icon svg={TrashIcon} className="fill-green-base"/>
          <Icon svg={SpinnerIcon} animate className="fill-green-base"/>
        </div>

        <div className="flex gap-2">
          <Badge variant="secondary">5</Badge>
          <Badge loading>5</Badge>
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
        </div>

        <div>
          <Button>
            Teste
          </Button>
        </div>

        <div className="flex gap-2">
          <ButtonIcon icon={TrashIcon}/>
          <ButtonIcon icon={TrashIcon} loading/>
          <ButtonIcon icon={TrashIcon} variant="secondary"/>
          <ButtonIcon icon={TrashIcon} variant="tertiary"/>
        </div>

        <div>
          <InputText/>
        </div>

        <div>
          <InputCheckbox />
          <InputCheckbox loading/>
        </div>

        <div>
          <Card size="md">Olá mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6"/>
          <Skeleton className="h-6"/>
          <Skeleton className="h-6 w-96" />
        </div>
      </div>
    </Container>
  )
}

export default PageComponents
 