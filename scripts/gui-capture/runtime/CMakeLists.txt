cmake_minimum_required(VERSION 3.21)
project(ManualGuiCapture LANGUAGES CXX)
set(CMAKE_AUTOMOC ON)
set(CMAKE_AUTORCC ON)
set(CMAKE_CXX_STANDARD 11)
find_package(Qt5 5.12 REQUIRED COMPONENTS QuickTest Quick Widgets)
get_filename_component(GUI_ROOT "${CMAKE_CURRENT_SOURCE_DIR}/../../../../gui" ABSOLUTE)
add_executable(gui-capture
  "${GUI_ROOT}/test/integration/main.cpp"
  "${GUI_ROOT}/UserActivityFilter.cpp"
  "${GUI_ROOT}/QmlTranslator.cpp"
  "${GUI_ROOT}/qml.qrc" "${GUI_ROOT}/image.qrc" "${GUI_ROOT}/manual/manual.qrc")
target_link_libraries(gui-capture PRIVATE Qt5::QuickTest Qt5::Quick Qt5::Widgets)
include("${GUI_ROOT}/manual/install.cmake")
copy_manual_languages(gui-capture)
