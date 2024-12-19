# Adivina el número

Quiero que crees un sencillo juego del tipo "adivina el número". Se debe elegir un número aleatorio entre 1 y 100, luego desafiar al jugador a adivinar el número en 10 intentos. Después de cada intento, debería decirle al jugador si ha acertado o no, y si está equivocado, debería decirle si se ha quedado corto o se ha pasado. También debería decir los números que ya se probaron anteriormente. El juego terminará una vez que el jugador acierte o cuando se acaben los intentos. Cuando el juego termina, se le debe dar al jugador la opción de volver a jugar.

1. Generar un número entre 1 y 100.
2. Registrar el número de intento en el que el jugador se encuentre. Empezando en el 1
3. Dar al jugador una forma de adivinar el número.
4. Una vez introducido el número, registrarlo en alguna parte para que el jugador pueda ver sus intentos previos.
5. A continuación comprobar si hemos adivinado el número
6. Si es correcto:
   1. Mostrar un mensaje de felicitaciones
   2. Hacer que el jugador no pueda introducir más intentos.
   3. Mostrar un control que permita volver a jugar
7. Si es incorrecto y al jugador todavia le quedan intentos:
   1. Decirle al jugador que ha fallado
   2. Dejar que el jugador lo intente de nuevo
   3. Incrementar el número de intentos en 1
8. Si el jugador falla y no quedan más intentos:
   1. Decirle al jugador que el juego se ha terminado
   2. Hacer que el jugador no pueda introducir más intentos
   3. Mostrar un control que permita volver a jugar
9. Una vez que se reinica el juego, asegurar de que la lógica del juego y la interface de usuario se restablezca por completo, luego volver al paso 1.
