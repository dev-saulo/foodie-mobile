import { View, Text, TouchableOpacity } from "react-native"
import { styles } from "./registro.style"
import Header from "../../components/header/header"
import TextBox from "../../components/textbox/textbox"
import Button from "../../components/button/button"


function Registro() {
    return <View style={styles.container}>
        <Header texto="Crie sua conta."/>

        <View style={styles.formGroup}>
            <View style={styles.form}>
                <TextBox label="Nome Completo"/>
            </View>

            <View style={styles.form}>
                <TextBox label="E-mail" />
            </View>

            <View style={styles.form}>
                <TextBox label="Escolha uma senha" isPassword={true} />
            </View>

            <View style={styles.form}>
                <TextBox label="Confirme a senha" isPassword={true} />
            </View>

            <View style={styles.form}>
                <Button texto="Próximo passo" />
            </View>
        </View>

        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>Acessar minha conta</Text>
            </TouchableOpacity>
        </View>
    </View>
}

export default Registro;