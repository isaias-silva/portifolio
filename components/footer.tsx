import Sfooter from "../styledComponents/sFooter";
import Translate from "./translator";

export default function Footer(){

    return <Sfooter>
  <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="ZMBPQ5E7YR4W2" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="item_name" value="ajude o desenvolvedor" />
<input type="hidden" name="currency_code" value="BRL" />

</form>


        <Translate/>
    </Sfooter>
}