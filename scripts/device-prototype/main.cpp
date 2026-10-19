#include <QApplication>
#include <QDir>
#include <QQmlApplicationEngine>
#include <QQmlContext>
#include <QTemporaryDir>
#include <QUrl>
#include "QmlTranslator.h"

// Host the production reader and device controls with the same context values
// they expect from the GUI. Preferences stay in a private temporary directory.
int main(int argc, char **argv)
{
    qputenv("QML_XHR_ALLOW_FILE_READ", QByteArray("1"));
    QApplication application(argc, argv);
    application.setApplicationName(QStringLiteral("BactoSense manual preview"));
    application.setOrganizationName(QStringLiteral("bnovate-manual-preview"));
    if (argc < 2 || argc > 3)
        return 1;
    QTemporaryDir settings;
    if (!settings.isValid())
        return 1;
    QQmlApplicationEngine engine;
    QmlTranslator translator;
    auto context = engine.rootContext();
    context->setContextProperty(QStringLiteral("ScreenshotEnabled"), false);
    context->setContextProperty(QStringLiteral("ScreenshotMode"), QString());
    context->setContextProperty(QStringLiteral("IpAddress"), QStringLiteral("127.0.0.1"));
    context->setContextProperty(QStringLiteral("GuiSettingsFileName"), settings.filePath(QStringLiteral("GUI.conf")));
    context->setContextProperty(QStringLiteral("Translator"), &translator);
    context->setContextProperty(QStringLiteral("ManualDirectoryUrl"),
        QUrl::fromLocalFile(QDir(application.applicationDirPath()).filePath(QStringLiteral("manual")) + QLatin1Char('/')).toString());
    context->setContextProperty(QStringLiteral("ManualPreviewLocale"), argc == 3 ? QString::fromLocal8Bit(argv[2]) : QString());
    engine.load(QUrl::fromLocalFile(QString::fromLocal8Bit(argv[1])));
    if (engine.rootObjects().isEmpty())
        return 1;
    return application.exec();
}
