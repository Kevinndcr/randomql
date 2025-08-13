# Paso a paso: Implementación de Hadoop + Apache Spark en Ubuntu (VirtualBox) para tu proyecto GraphQL

1. **Prepara la VM Ubuntu**
   - Instala Ubuntu Server en VirtualBox.
   - Configura red NAT y reenvío de puertos para SSH y GraphQL (ejemplo: 4000).

2. **Instala Java (requisito para Hadoop y Spark)**
   ```bash
   sudo apt update
   sudo apt install openjdk-11-jdk -y
   java -version
   ```

3. **Instala Hadoop**
   - Descarga Hadoop:
     ```bash
     wget https://downloads.apache.org/hadoop/common/hadoop-3.3.6/hadoop-3.3.6.tar.gz
     tar -xzvf hadoop-3.3.6.tar.gz
     sudo mv hadoop-3.3.6 /usr/local/hadoop
     ```
   - Configura variables de entorno en `~/.bashrc`:
     ```bash
     export HADOOP_HOME=/usr/local/hadoop
     export PATH=$PATH:$HADOOP_HOME/bin:$HADOOP_HOME/sbin
     export JAVA_HOME=/usr/lib/jvm/java-11-openjdk-amd64
     source ~/.bashrc
     ```
   - Configura archivos básicos (`core-site.xml`, `hdfs-site.xml`, `mapred-site.xml`, `yarn-site.xml`).
   - Formatea el sistema de archivos:
     ```bash
     hdfs namenode -format
     ```
   - Inicia Hadoop:
     ```bash
     start-dfs.sh
     start-yarn.sh
     ```

4. **Instala Apache Spark**
   - Descarga Spark:
     ```bash
     wget https://downloads.apache.org/spark/spark-3.5.1/spark-3.5.1-bin-hadoop3.tgz
     tar -xzvf spark-3.5.1-bin-hadoop3.tgz
     sudo mv spark-3.5.1-bin-hadoop3 /usr/local/spark
     ```
   - Configura variables de entorno en `~/.bashrc`:
     ```bash
     export SPARK_HOME=/usr/local/spark
     export PATH=$PATH:$SPARK_HOME/bin:$SPARK_HOME/sbin
     source ~/.bashrc
     ```

5. **Exporta tus datos de MongoDB**
   - Instala MongoDB en Ubuntu o exporta desde tu máquina física:
     ```bash
     mongoexport --db ProyectoFinal --collection profesionales --out profesionales.json
     mongoexport --db ProyectoFinal --collection empleadores --out empleadores.json
     # Repite para cada colección
     ```

6. **Sube los archivos a HDFS**
   ```bash
   hdfs dfs -mkdir /user/ubuntu
   hdfs dfs -put profesionales.json /user/ubuntu/
   hdfs dfs -put empleadores.json /user/ubuntu/
   # Repite para cada archivo
   ```

7. **Procesa los datos con Spark**
   - Instala Python y PySpark:
     ```bash
     sudo apt install python3-pip -y
     pip3 install pyspark
     ```
   - Ejemplo de script:
     ```python
     from pyspark.sql import SparkSession
     spark = SparkSession.builder.appName("AnalisisProfesionales").getOrCreate()
     df = spark.read.json("hdfs:///user/ubuntu/profesionales.json")
     df.groupBy("titulo").count().show()
     ```
   - Ejecuta el script:
     ```bash
     python3 tu_script.py
     ```

8. **Accede a tu servidor GraphQL desde la máquina física**
   - Inicia tu servidor GraphQL en la VM Ubuntu, asegurándote de que escuche en `0.0.0.0`.
   - Accede desde tu navegador físico usando el puerto configurado en el reenvío de puertos (ejemplo: `http://localhost:4000`).

---

**Notas:**
- Puedes automatizar la exportación de datos y el procesamiento con scripts.
- Para producción, considera usar clusters reales y almacenamiento distribuido.
- Ajusta rutas y usuarios según tu configuración.
