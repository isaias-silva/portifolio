import Sfooter from "../styledComponents/sFooter";
import Translate from "./translator";

export default function Footer(){

    return <Sfooter>
  <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="business" value="ZMBPQ5E7YR4W2" />
<input type="hidden" name="no_recurring" value="0" />
<input type="hidden" name="item_name" value="ajude o desenvolvedor" />
<input type="hidden" name="currency_code" value="BRL" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" src="https://www.paypal.com/en_BR/i/scr/pixel.gif" width="1" height="1" />
</form>


        <Translate/>
    </Sfooter>
}